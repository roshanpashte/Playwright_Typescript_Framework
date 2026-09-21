import * as XLSX from 'xlsx';

export interface CheckoutData {
  firstName: string;
  lastName: string;
  postalCode: string;
}

export function getCheckoutDataFromExcel(): CheckoutData {
  const workbook = XLSX.readFile(
    'test-data/checkoutData.xlsx'
  );

  const worksheet = workbook.Sheets['CheckoutData'];

  const data = XLSX.utils.sheet_to_json<CheckoutData>(worksheet);

  return {
    firstName: String(data[0].firstName),
    lastName: String(data[0].lastName),
    postalCode: String(data[0].postalCode),
  };
}