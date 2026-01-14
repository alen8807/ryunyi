
import { GoogleGenAI } from "@google/genai";

/**
 * API 키가 없을 때를 대비한 로컬 지식 기반 (Keyword Matching)
 */
const LOCAL_KNOWLEDGE: Record<string, string> = {
  "성적": "이윤님은 학부 GPA 4.09/4.3, 대학원 GPA 4.21/4.3으로 학업 성적이 매우 우수합니다.",
  "gpa": "학부 GPA는 4.09/4.3이며, 대학원 GPA는 4.21/4.3으로 최상위권의 성적을 유지하고 있습니다.",
  "학점": "이윤님은 학사(4.09/4.3)와 석사(4.21/4.3) 과정 모두에서 뛰어난 학점을 기록했습니다.",
  "수상": "이윤님은 빅콘테스트(Bigcontest)에서 2022년, 2023년, 2024년까지 3년 연속으로 수상한 놀라운 기록을 가지고 있습니다.",
  "빅콘": "빅콘테스트(Bigcontest)에서 3년 연속(2022~2024) 수상하며 데이터 분석 역량을 입증했습니다.",
  "학교": "연세대학교 응용통계학과를 졸업하고, 현재 연세대학교 대학원에서 통계데이터사이언스를 전공하고 있습니다.",
  "전공": "학부에서는 응용통계학을, 대학원에서는 통계데이터사이언스를 전공하며 전문성을 쌓고 있습니다.",
  "경력": "CSES(사회적가치연구원)와 심비오 리빙테크에서 연구 인턴으로 활동하며 실무 경험을 쌓았습니다.",
  "인턴": "CSES(사회적가치연구원) 및 심비오 리빙테크 인턴십을 통해 데이터 기반 리서치 역량을 키웠습니다.",
  "논문": "Arxiv 및 KCI 등재 논문에 참여한 연구 경험이 있으며, 사회적 가치 측정 관련 리포트도 발간했습니다.",
  "학회": "연세빅데이터학회(Ybigta)와 ESC 등에서 활발히 활동하며 데이터 분석 프로젝트를 수행했습니다."
};

/**
 * 간단한 키워드 매칭을 통한 답변 생성
 */
const getFallbackResponse = (message: string) => {
  const query = message.toLowerCase().replace(/\s/g, '');
  for (const key in LOCAL_KNOWLEDGE) {
    if (query.includes(key.toLowerCase())) {
      return LOCAL_KNOWLEDGE[key];
    }
  }
  return "안녕하세요! 현재는 기본 답변 모드로 작동 중입니다. 이윤님의 '성적', '수상', '학교', '인턴 경력' 등에 대해 물어봐 주세요. (더 상세한 대화는 API Key 설정 시 가능합니다.)";
};

const SYSTEM_INSTRUCTION = `
You are an AI representative for "Lee Yoon" (이윤), a student/professional from Yonsei University.
Your goal is to answer questions about Lee Yoon's background, achievements, and career aspirations in a friendly, professional, and confident manner.

Context about Lee Yoon:
- Name: Lee Yoon (이윤)
- Institution & Education:
    1. Yonsei University, Dept. of Applied Statistics (응용통계학과), Bachelor's Degree (2020-2024). GPA: 4.09/4.3.
    2. Yonsei University, Dept. of Statistics and Data Science (통계데이터사이언스학과), Master's/Graduate Program (2025-). GPA: 4.21/4.3.
- Society Activities:
    - ESC: 2021 - 2022.
    - Ybigta (Yonsei Big Data Association): 2024.
- Awards: Bigcontest (빅콘테스트) Winner in 2022, 2023, and 2024 (3 consecutive years).
- Publications:
    1. Report: Seq 1017 (CSES) - "사회적 가치 측정과 플랫폼의 역할"
    2. Report: Seq 1007 (CSES) - "지속가능한 생태계 구축을 위한 고찰"
    3. Paper: Arxiv 2506.03426
    4. Paper: KCI ART003110007
- Work Experience:
    1. CSES (사회적가치연구원): Research Intern (2022.02.28 ~ 2022.08.31)
    2. Symbio Living Tech (심비오 리빙테크): Research Intern (2023.05.01 ~ 2023.07.31)

Guidelines:
1. Maintain a polite and professional tone.
2. Be concise.
3. Highlight the consistency of high GPAs (4.09 and 4.21) and the 3-year Bigcontest winning streak.
4. Use the language the user uses (Korean or English).
`;

export const getGeminiResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]) => {
  const apiKey = process.env.API_KEY;

  // API 키가 없거나 비정상적인 경우 폴백 모드 사용
  if (!apiKey || apiKey === 'undefined' || apiKey === '' || apiKey.includes('YOUR_API_KEY')) {
    return getFallbackResponse(userMessage);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
          ...history,
          { role: "user", parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || getFallbackResponse(userMessage);
  } catch (error) {
    console.error("Gemini API Error:", error);
    // API 호출 실패 시(할당량 초과 등) 폴백 응답 반환
    return getFallbackResponse(userMessage);
  }
};
