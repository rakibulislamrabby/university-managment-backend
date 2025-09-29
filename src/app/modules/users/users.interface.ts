import { Schema, model, connect } from 'mongoose';

export type IUser= {
  id: string;
  role: string;
  email: string;
  password: string;
}