import {
  getbusinessesURL,
  getSBAappsURL,
  userProfileURL,
  getPlansURL,
  transactionsURL,
  verifyTransactionURL,
  cancelSubscriptionURL,
} from "../constants/urls";
import { deleteApi, getApi, patchApi, postApi } from "../helpers/RequestHelper";

//to get user profile
export const getUserProfile = async () => {
  const res = await getApi(userProfileURL);
  return res;
};

// to get sba apps
export const getSBAapps = async (businessId) => {
  const res = await getApi(`${getSBAappsURL}${businessId}/`);
  return res;
};

//to update user profile
export const editProfile = async ({ payload }) => {
  const res = await patchApi(userProfileURL, payload);
  return res;
};

// to get sba businesses
export const getBusinesses = async () => {
  const res = await getApi(getbusinessesURL);
  return res;
};

// to get single business
export const getSingleBusiness = async (id) => {
  const res = await getApi(`${getbusinessesURL}${id}/`);
  return res;
};

// to add a businesss
export const addBusiness = async ({ payload }) => {
  const res = await postApi(getbusinessesURL, payload);
  return res;
};

// to add a businesss
export const editBusiness = async ({ payload, id }) => {
  const res = await patchApi(`${getbusinessesURL}${id}/`, payload);
  return res;
};

// to add a member to business
export const addMember = async ({ payload, id }) => {
  const res = await postApi(`${getbusinessesURL}${id}/add-member/`, payload);
  return res;
};

// to delete a business
export const deleteBusiness = async ({ id }) => {
  const res = await deleteApi(`${getbusinessesURL}${id}/`);
  return res;
};

// get subscription plans
export const getPlans = async () => {
  const res = await getApi(getPlansURL);
  return res;
};

// subscribe to plan
export const subscribe = async ({ payload }) => {
  const res = await postApi(transactionsURL, payload);
  return res;
};

// verify transation
export const verifyTransaction = async ({ reference }) => {
  const res = await getApi(`${verifyTransactionURL}${reference}/`);
  return res;
};

// cancel subscription
export const cancelSubscription = async ({ payload }) => {
  const res = await postApi(`${cancelSubscriptionURL}`, payload);
  return res;
};
