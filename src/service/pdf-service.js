PDFDocument = require('pdfkit');


function buildPDF(dataCallback,endCallback) {
    const doc = new PDFDocument();
doc.on('data',dataCallback);
doc.on('end',endCallback);

//tieu de
doc.fontSize(24).text('Medical registration form', { align: 'center' });

 // Thông tin cá nhân
 doc.fontSize(14).text('Name:',{ continued: true });
 doc.fontSize(14).text('John Doe', { underline: true });

 doc.fontSize(14).text('Age:', { continued: true });
 doc.fontSize(14).text('30', { underline: true });

 doc.fontSize(14).text('Sex:', { continued: true });
 doc.fontSize(14).text('male', { underline: true });

 doc.fontSize(14).text('nationality:', { continued: true });
 doc.fontSize(14).text('Viet Nam', { underline: true });

 doc.fontSize(14).text('Address:', { continued: true });
 doc.fontSize(14).text('Ha Noi', { underline: true });

 // Yêu cầu khám và phòng khám
 doc.fontSize(14).text('Request:', {  continued: true });
 doc.fontSize(14).text('General health check', { underline: true });

 doc.fontSize(14).text('Clinic:', { underline: true });
 doc.fontSize(14).text('number 2', { underline: true });

// Ngày tháng năm
const today = new Date();
doc.fontSize(14).text('In Ngày:', { continued: true });
doc.fontSize(14).text(today.toLocaleDateString('vi-VN'), { underline: true });

doc.end();
}

module.exports = {buildPDF}