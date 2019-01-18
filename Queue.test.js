// 0. import Queue มาใช้ ใน test
const Queue = require('./Queue');
// 1. สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)
    test('สร้าง queue ใหม่และทดสอบว่า empty มีค่าเป็น true (ว่าง)', ()=> {
        const queue = new Queue(1);
        expect(queue.empty()).toBe(true);
    });
// 2. สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20
    test('สร้าง queue size 1 และ ทดสอบว่าสามารถ enqueue(20) และ dequeue ค่าที่ได้จะได้ 20', ()=> {
        const queue = new Queue(1);
        expect(queue.enqueue(20)).toBe(true);
        expect(queue.dequeue(20)).toBe(20);
    });
// 3. สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)
    test('สร้าง queue size 1 และ ทดสอบว่า enqueue เข้าไป 1 ตัว แล้ว full จะได้ค่า true (เต็ม)', ()=> {
        const queue = new Queue(1);
        expect(queue.enqueue(1)).toBe(queue.full(true));
    });
// 4. สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)
    test('สร้าง queue size 1 และ ทดสอบว่า เมื่อเพิ่มมากกว่า 1 แล้ว enqueue(5) ค่าที่ได้จะเป็น false (เพิ่มไม่ได้)',()=> {
        const queue = new Queue(1);
        queue.enqueue(5);
        expect(queue.enqueue(10)).toBe(false);
    });
// 5. สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน
    test('สร้าง queue size 2 และ enqueue 1 และ 2 เข้าไป เมื่อ dequeue จะได้ ค่าเรียงลำดับเป็น 1 และ 2 เช่นกัน', ()=> {
        const queue = new Queue(2);
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
    });
// 6. สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null
    test('สร้าง queue size 1 และ dequeue เลย จะต้องตรวจว่าค่าที่ได้จาก dequeue เป็น null', ()=> {
        const queue = new Queue(1);
        expect(queue.dequeue()).toBe(null)
    });
//  7. Bug tail
    test('Bug tail', ()=> {
        const queue = new Queue(3);
        queue.enqueue(5);
        queue.enqueue(1);
        queue.enqueue(12);
        queue.dequeue();
        expect(queue.tail).toBe(2);
    });
//  8. Bug head
    test('Bug head', ()=> {
        const queue = new Queue(3);
        queue.enqueue(4);
        queue.enqueue(16);
        queue.dequeue();
        queue.enqueue(20);
        expect(queue.head).toBe(1);
    });
