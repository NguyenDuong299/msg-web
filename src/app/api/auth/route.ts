import { serialize } from "cookie"; // Nhập serialize từ cookie

export async function POST(request: Request) {
  try {
    const res = await request.json(); 
    const sessionToken = res.token; 
    console.log('sessionToken', sessionToken)
    // Kiểm tra xem token có tồn tại không
    if (!sessionToken) {
      return new Response(JSON.stringify({
        message: "Không nhận được Session Token"
      }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const cookie = serialize("sessionToken", sessionToken, {
      httpOnly: true, // Chỉ có thể truy cập cookie từ server
      secure: process.env.NODE_ENV === "production", // Sử dụng secure trong môi trường production
      maxAge: 3600, // Thời gian sống của cookie (1 giờ)
      path: "/", // Cookie sẽ có sẵn cho toàn bộ ứng dụng
    });

    // Trả về phản hồi thành công
    return new Response(JSON.stringify({
      message: "Token received successfully",
      token: sessionToken, 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookie, // Thiết lập cookie trong header
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "An error occurred" }), {
      status: 500, 
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
