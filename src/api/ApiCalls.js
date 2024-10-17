import axios from "axios";

// Eger Android emulator kullaniyorsaniz, emulatorun bilgisayarinizdaki localhost adresine erisebilmesi icin ozel bir IP adresi olan 10.0.2.2'yi kullanabilirsiniz
const API_BASE_URL = "http://10.0.2.2:9001/api/v1";

export const getTrainings = () => {
    return axios.get(`${API_BASE_URL}/trainings/get`);
}