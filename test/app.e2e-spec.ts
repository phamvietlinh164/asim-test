import * as request from 'supertest';
import * as uuid from 'uuid';
import * as moment from 'moment';
import { HttpStatus } from '@nestjs/common';
import { BookingSlotListDTO } from 'src/medpro-booking/dto/bookingSlotList.dto';
import { PatientMedproDTO } from 'src/medpro/dto/patientMedproDto';
const app = 'http://localhost:6500';

/* Khởi tạo giá trị ban đầu */
const bookingSlots = [
  {
    roomId: 'Room01',
    subjectId: 'Subject01',
    doctorId: 'Doctor01',
    serviceId: 'Service01',
    startTimeString: moment('2020-03-17', 'YYYY-MM-DD').toISOString(true),
    startTime: moment('2020-03-17 08:00', 'YYYY-MM-DD HH:mm').toISOString(true),
    endTime: moment('2020-03-17 08:30', 'YYYY-MM-DD HH:mm').toISOString(true),
    maxSlot: 100,
    availableSlot: 92,
  },
  {
    roomId: 'Room02',
    subjectId: 'Subject02',
    doctorId: 'Doctor02',
    serviceId: 'Service02',
    startTimeString: moment('2020-03-17', 'YYYY-MM-DD').toISOString(true),
    startTime: moment('2020-03-17 08:00', 'YYYY-MM-DD HH:mm').toISOString(true),
    endTime: moment('2020-03-17 08:30', 'YYYY-MM-DD HH:mm').toISOString(true),
    maxSlot: 100,
    availableSlot: 92,
  },
].map(item => ({ ...item, bookingSlotId: `${item.subjectId}-${item.roomId}-${item.doctorId}-${item.serviceId}` }));

const patientInfo: PatientMedproDTO = {
  patientCode: 'P0001',
  surname: 'Trương Văn',
  name: 'Toàn',
  sex: true,
  birthdate: moment('1989-03-16', 'YYYY-MM-DD').toISOString(true),
  birthyear: 1989,
  mobile: '0845458785',
  email: 'zhangchinhan@gmail.com',
  countryCode: 'Country01',
  cityId: 'City01',
  districtId: 'District01',
  wardId: 'Ward01',
  nationId: 'Nation01',
  professionId: 'Profession01',
};

describe('HIS Simulator', () => {

  it('Reset Patients', () => {
    return request(app)
      .delete('/medpro/api/patient/reset')
      .expect(HttpStatus.OK);
  });

  it('Tạo PatientInfo', () => {
    return request(app)
      .post('/medpro/api/patient/insert')
      .send(patientInfo)
      .expect(HttpStatus.CREATED)
      .expect(({ body }) => {
        expect(body.patientCode).toEqual(patientInfo.patientCode);
      });
  });

  it('Reset Booking Slots', () => {
    return request(app)
      .delete('/medpro-booking/booking-slot/reset')
      .expect(HttpStatus.OK);
  });

  it('Tạo nhiều Booking Slots', () => {
    const bookingSlot: BookingSlotListDTO = {
      bookingSlots,
    };
    return request(app)
      .post('/medpro-booking/booking-slot/insert-many')
      .send(bookingSlot)
      .expect(HttpStatus.CREATED)
      .expect(({ body }) => {
        expect(body.length).toEqual(bookingSlot.bookingSlots.length);
      });
  });

  it('Lấy chính xác thông tin bệnh nhân theo patientCode', () => {
    return request(app)
      .get(`/medpro/api/getPatient/${patientInfo.patientCode}`)
      .expect(HttpStatus.OK)
      .expect(({ body }) => {
        expect(body.patientCode).toEqual(patientInfo.patientCode);
      });
  });

  it('Không tìm thấy thông tin bệnh nhân theo patientCode', () => {
    const patientCode: string = 'PCODE434340002';
    return request(app)
      .get(`/medpro/api/getPatient/${patientCode}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect(({ body }) => {
        expect(body.message).toEqual('Không tìm thấy thông tin bệnh nhân');
      });
  });

});
