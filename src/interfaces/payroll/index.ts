import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  payment_date: any;
  amount: number;
  payment_method: string;
  status: string;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  status?: string;
  user_id?: string;
  company_id?: string;
}
