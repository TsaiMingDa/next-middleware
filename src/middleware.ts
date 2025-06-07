import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  console.log('middleware執行:');
  if (req.nextUrl.pathname === '/page4' && url.searchParams.get('hello') === 'world') {
    console.log('匹配到 /page4');
    return NextResponse.redirect(new URL('/hi', req.url), 308);
  }

    return NextResponse.next();
}

// 更新 matcher 以包含新的路徑
export const config = {
  matcher: ['/page4'],
};
