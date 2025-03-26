import FingerPrintJs from "@fingerprintjs/fingerprintjs";

export const getDeviceFinterPrint = async () => {
  try {
    const fp = await FingerPrintJs.load();
    const result = await fp.get();
    return result.visitorId;
  } catch (error) {
    throw new Error(error.message);
  }
};
