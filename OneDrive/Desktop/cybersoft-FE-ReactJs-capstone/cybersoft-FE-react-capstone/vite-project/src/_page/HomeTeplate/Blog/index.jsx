import React from 'react';

const Index = () => {
    return (
        <div className="blog container mx-auto p-5">
            {/* Phần tiêu đề chính */}
            <div className="title_blog text-left font-bold mb-5">
                <h4 className="text-2xl">Góc điện ảnh</h4>
            </div>

            {/* Bố cục hai bên */}
            <div className="content flex flex-col lg:flex-row items-start gap-5">
                {/* Hình ảnh bên trái */}
                <div className="content_left lg:w-1/2 w-full">
                    <img src="/img1.jpg" alt="Moana 2" className="w-full rounded shadow-md" />
                </div>

                {/* Nội dung bên phải */}
                <div className="content_right lg:w-1/2 w-full relative">
                    {/* Tiêu đề ở góc trên */}
                    <h4 className="text-xl font-semibold mb-4">
                        REVIEW MOANA 2: MOANA TRỞ LẠI VỚI VAI TRÒ GÌ?
                    </h4>

                    {/* Đoạn mô tả dưới tiêu đề */}
                    <div>
                        <p className="text-justify text-base leading-relaxed">
                            Moana là con gái thủ lĩnh đảo Montonui, năng động, nghịch ngợm. Mang trách nhiệm kế tục cha ông, 
                            dẫn dắt những người dân chất phác trong làng, Moana đã hừng hực ngọn lửa nhiệt huyết từ thuở bé. 
                            Thế nhưng, khi nhận ra bản thân vẫn đang sống trong vòng tròn an toàn cha mình tạo ra, chỉ dám đứng 
                            trên bãi cát nhìn ra biển khơi rộng lớn ngoài xa, Moana dũng cảm nghe theo lời khuyên của bà, nhận 
                            sứ mệnh đi tìm á thần Maui – kẻ lỡ lấy đi trái tim nữ thần sáng tạo Te Fiti, khiến cả thế giới loài 
                            người gặp họa. Ở phần phim mới, cô bé Moana nay đã là thiếu nữ, thông thạo việc phiêu lưu với người 
                            bạn “đại dương” và được dân làng hết mực tin yêu. Tuy nhiên, nàng Moana vẫn trăn trở khi mãi không tìm 
                            thấy tộc người khác ngoài khơi xa…
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
