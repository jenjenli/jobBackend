import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://jobicy.com/api/v2/remote-jobs', {
  });
  
  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: res.status });
  }
  
  const data = await res.json();
  
  const response = NextResponse.json(data);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return response;
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}