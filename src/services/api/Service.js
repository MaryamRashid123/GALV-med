/* eslint-disable import/no-anonymous-default-export */
import { apiClient } from './ApiClient';

// GET Service
const getService = async (url, data) => {
  try {
    const response = await apiClient().get(
      url, 
      data
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// POST Service
const postService = async (url, data, opt={}) => {
  try {
    const response = await apiClient().post(
      url, 
      data,
      opt
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// PUT Service
const putService = async (url, data, opt={}) => {
  try {
    const response = await apiClient().put(
      url, 
      data,
      opt
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// DELETE Service
const deleteService = async (url, data, opt={}) => {
  try {
    const response = await apiClient().get(
      url, 
      data,
      opt
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  getService,
  postService,
  putService,
  deleteService
};