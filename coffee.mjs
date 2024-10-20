import { resolve } from "path";

export function makeCoffee(name) {
  return new Promise((resolve, reject) => {
    // 1000 milidetik = 1 detik
    const estimationTime = 5000;
    let isSuccess = false;
  
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSecond} detik`);
  
    setTimeout(() => {
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error('Maaf, Gagal membuatkan kopi.'));
        return;
      }

      console.log('Pramusaji selesai membuat kopi.');
      resolve(name);
    }, estimationTime);
  });
}

export function sendCoffee(name) {
  return new Promise((resolve, reject) => {
    const estimationTime = 2000;
    let isSuccess = false;

    console.log('Pramusaji sedang mengantarkan kopi pesanan');

    setTimeout(() => {
      // Penentuan hasil dari proses asinkron
      const number = Math.random();
      if (number > 0.3) {
        isSuccess = true;
      }

      if (!isSuccess) {
        reject(new Error('Maaf, kopi Gagal diantarkan.'), null);
        return;
      }

      console.log('Pramusaji sudah sampai ke meja.');
      resolve(name);
    }, estimationTime);
  });
}