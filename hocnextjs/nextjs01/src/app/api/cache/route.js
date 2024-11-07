import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
export async function POST(request) {
  //Xác định path muốn xóa cache
  const { type, value } = await request.json();
  if (type === "path") {
    revalidatePath(value);
  } else if (type === "tags") {
    revalidateTag(value);
  } else {
    return NextResponse.json({ success: false });
  }

  return NextResponse.json({ success: true });
}
