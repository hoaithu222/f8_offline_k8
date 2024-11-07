import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(3, 50, {
    message: 'Vui lòng nhập tên',
  })
  name: string;
  @Length(3, 50, {
    message: 'Email bắt buộc phải nhập',
  })
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  email: string;
  @Length(6, 8, {
    message: 'Mật khẩu phải từ 6 kí tự',
  })
  password?: string;
}
