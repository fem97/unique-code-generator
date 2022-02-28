const mongoose = require("mongoose");

// Schemas
const company = new mongoose.Schema({
  cid: String,
  name: String,
  address: String,
  mobile: String,
  email: String,
});

const sysUser = new mongoose.Schema({
  cid: String,
  userid: String,
  name: String,
  mobile: String,
  email: String,
  password: String,
  syncCode: String,
});

const sysUserLoginLog = new mongoose.Schema({
  cid: String,
  userid: String,
  loginDatetime: String,
  loginIp: String,
  loginDevice: String,
});

const sysUserActivityLog = new mongoose.Schema({
  cid: String,
  userid: String,
  action: String,
  actionDatetime: String,
  actionDesc: String,
});

const brand = new mongoose.Schema({
  cid: String,
  brand: String,
});

const item = new mongoose.Schema({
  cid: String,
  brand: String,
  item: String,
  variant: String,
  description: String,
});

const keyword = new mongoose.Schema({
  cid: String,
  name: String,
});

const job = new mongoose.Schema({
  cid: String,
  brand: String,
  item: String,
  datapackName: String,
  manufacturingDate: String,
  quantity: String,
  expiryDate: String,
  dueQuantity: String,
  status: Boolean,
});

const jobCode = new mongoose.Schema({
  cid: String,
  brand: String,
  item: String,
  datapackName: String,
  batch: String,
  itemSerial: String,
});

const jobCodeVerification = new mongoose.Schema({
  cid: String,
  brand: String,
  item: String,
  itemSerial: String,
  verificationDate: String,
  verificationMobile: String,
});

// models
const Company = mongoose.model("Company", company);

const SysUser = mongoose.model("SysUser", sysUser);
const SysUserLoginLog = mongoose.model("SysUserLoginLog", sysUserLoginLog);
const SysUserActivityLog = mongoose.model(
  "SysUserActivityLog",
  sysUserActivityLog
);

const Brand = mongoose.model("Brand", brand);
const Item = mongoose.model("Item", item);

const Keyword = mongoose.model("Keyword", keyword);
const Job = mongoose.model("Job", job);
const JobCode = mongoose.model("JobCode", jobCode);
const JobCodeVerification = mongoose.model(
  "JobCodeVerification",
  jobCodeVerification
);

module.exports = {
  Company,
  SysUser,
  SysUserLoginLog,
  SysUserActivityLog,
  Brand,
  Item,
  Keyword,
  Job,
  JobCode,
  JobCodeVerification,
};
