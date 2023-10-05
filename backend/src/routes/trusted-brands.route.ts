import request from "request";
import express from "express";

import trustedBrandsControllers from "../controllers/trusted-brands.controller";

const router = express.Router();

// your routes paths and methods
router.get("/api/getbrands", trustedBrandsControllers.getTrustedBrands);
router.get("/api/syncbrands", trustedBrandsControllers.syncBrands);

export default router;