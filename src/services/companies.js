import http from '../config/http';
import { companies } from './endpoints';

export async function fetchCompanies() {
  try{
    const companiesData = await http.get(companies);
    return companiesData.data;
  } catch(err){
    console.log(err);
    throw err;
  }
}

export async function fetchPartners() {
  try{
    const partnersData = await http.get(`${companies}/partners`);
    return partnersData.data;
  } catch(err){
    console.log(err);
    throw err;
  }
}

export async function fetchCompany(company_id) {
  try {
    const companyData = await http.get(`${companies}/${company_id}`);
    return(companyData.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deactivateCompany(company_id) {
  try {
    const userData = await http.delete(`${companies}/${company_id}`);
    return userData.data;
  } catch (err) {
    throw err;
  }
}

export async function createCompany(values) {
  try {
    const companyData = await http.post(companies, values);
    return(companyData.data);
  } catch (err) {
    throw err;
  }
}

export async function editCompany(values, company_id) {
  try {
    const companyData = await http.put(`${companies}/${company_id}`, values);
    return(companyData.data);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
