
import { GoogleGenAI } from "@google/genai";

/**
 * API 키가 없을 때를 대비한 로컬 지식 기반 (Keyword Matching)
 */
const LOCAL_KNOWLEDGE: Record<string, string> = {
  "성적": "이륜이님은 학부 GPA 4.09/4.3, 대학원 GPA 4.21/4.3으로 학업 성적이 매우 우수합니다.",
  "gpa": "학부 GPA는 4.09/4.3이며, 대학원 GPA는 4.21/4.3으로 최상위권의 성적을 유지하고 있습니다.",
  "학점": "이륜이님은 학사(4.09/4.3)와 석사(4.21/4.3) 과정 모두에서 뛰어난 학점을 기록했습니다.",
  "수상": "이륜이님은 빅콘테스트(Bigcontest)에서 2022년, 2023년, 2024년까지 3년 연속으로 수상한 놀라운 기록을 가지고 있습니다.",
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
  return "안녕하세요! 이륜이님의 포트폴리오 페이지입니다.";
};

const SYSTEM_INSTRUCTION = `
You are an AI representative for "Lee Ryunyi" (이륜이), a student/professional from Yonsei University.
Your goal is to answer questions about Lee Ryunyi's background.
`;

export const getGeminiResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[]) => {
  return getFallbackResponse(userMessage);
};
