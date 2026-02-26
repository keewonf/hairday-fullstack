import { apiConfig } from "./api-config.js";
import { request } from "./api.js";

// create schedule by delegating to request helper
export async function scheduleNew({ name, when }) {
  return request(`${apiConfig.baseURL}/schedules`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, when }),
  });
}
