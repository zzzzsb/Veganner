export const REST_API_KEY = "9901ca27a0f11eb036ff645bf90c0204";
export const REDIRECT_URI =  "http://localhost:3000/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const GOOGLE_CLIENT_ID = '1018480931225-e74cekufff2t38cq2t5p7ttfu2n0471s.apps.googleusercontent.com';
export const GOOGLE_REDIRECT_URI =  "http://localhost:3000/auth/google/callback";

export const NAVER_CLIENT_ID = 'zYY1nsY2kmg9RPWQfcbd';
export const NAVER_CLIENT_SECRET = 'ceXIxaz8zL';
export const STATE_STRING = 'asdiwqnlakscx';
export const NAVER_REDIRECT_URI =  "http://localhost:3000/auth/naver/callback";
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE_STRING}&redirect_uri=${NAVER_REDIRECT_URI}`;