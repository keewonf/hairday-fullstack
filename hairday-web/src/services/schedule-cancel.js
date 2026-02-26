import { apiConfig } from "./api-config";
import { request } from "./api.js";

// returns { ok: boolean, status?: number, error?: any }
export async function scheduleCancel({ id }) {
  const result = await request(`${apiConfig.baseURL}/schedules/${id}`, {
    method: "DELETE",
  });
  // we don't care about body here
  return result;
}
