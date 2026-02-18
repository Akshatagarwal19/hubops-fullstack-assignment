import { services } from "../data/services.data.js";

export const getServices = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
