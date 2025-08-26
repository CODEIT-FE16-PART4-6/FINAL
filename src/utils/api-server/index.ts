import { REQUEST_URL } from "../api-public";

interface FetchOptions {
  path: string;
  query?: Record<string, string | number | boolean>;
  revalidate?: number;
}

/**
 * @param path: 엔드포인트 (e.g. '/activities')
 * @param query: 쿼리 파라미터 (e.g. '?method=offset&page=1', 사용 시 {method: 'offset'} 과 같은 객체 형태로 전달)
 * @param revalidate: 재요청 주기 (초 단위)
 */
export const fetchServerData = async <T>({ path, query, revalidate }: FetchOptions): Promise<T> => {
  const url = new URL(`${REQUEST_URL}${path}`);

  if (query) {
    Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, String(value)));
  }

  const options: RequestInit & { next?: { revalidate: number } } = {};

  if (typeof revalidate === 'number') options.next = { revalidate }; // revalidate 인자를 받았을 때만 fetch option에 추가

  const res = await fetch(url.toString(), options);

  if (res.status >= 400) {
    let errorMessage = `요청 실패 (status: ${res.status})`; // try catch 실패 시 fallback 문자열

    try {
      const errorBody = await res.json();

      if (errorBody && typeof errorBody === 'object' && 'message' in errorBody) {
        errorMessage = `상태 코드: ${errorBody.status}, 에러 메시지: ${errorBody.message}`;
      }
    } catch (err) {
      errorMessage = `JSON 파싱 실패: ${err instanceof Error ? err.message : String(err)}`;
    }

    throw new Error(errorMessage); // Error 인스턴스는 문자열만 전달 가능
  }

  return res.json();
};
