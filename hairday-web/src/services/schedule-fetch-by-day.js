// Fetch schedules for a specific date from API
import { apiConfig } from "./api-config.js";
import { request } from "./api.js";

// returns { ok: boolean, status?: number, data?: any, error?: any }
export async function scheduleFetchByDay({ date }) {
  const result = await request(`${apiConfig.baseURL}/schedules?date=${date}`);
  // rename body to data for clarity
  return { ...result, data: result.body };
}
