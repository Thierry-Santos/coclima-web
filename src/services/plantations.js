import http from '../config/http';
import { plantations } from './endpoints';

export async function fetchPlantations() {
  try {
    const plantationsData = await http.get(plantations);
    return plantationsData.data;
  } catch(err){
    throw err;
  }
}

// export function fetchLogs() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const logsData = await http.get(logs);
//       resolve(logsData.data);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }

// export function fetchLog(log_id) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const logsData = await http.get(`${logs}/${log_id}`);
//       resolve(logsData.data);
//     } catch (err) {
//       reject(err);
//     }
//   });
// }