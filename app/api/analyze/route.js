import { analyzeEnterprise } from '@/lib/minimax';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();
    const result = await analyzeEnterprise(formData);
    
    if (!result) {
      return NextResponse.json(
        { success: false, error: 'AI分析失败，请稍后重试' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Analyze error:', error);
    return NextResponse.json(
      { success: false, error: '服务器错误' },
      { status: 500 }
    );
  }
}
