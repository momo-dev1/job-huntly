export interface ISearchParams {
  search?: string;
  status?: string;
  type?: string;
  position?: string;
  sort?: string;
  page?: string;
}

export interface Job {
  _id: string;
  jobType: string;
  jobStatus: string;
  company: string;
  position: string;
  location: string;
  createdAt: string;
  avatarColor: string;
  skills: string[];
}

export interface User {
  username: string;
  email: string;
  password: string;
  location: string;
  role?: "user" | "admin";
}

export interface LoaderData {
  searchValues: {
    search: string;
    status: string;
    type: string;
    position: string;
    sort: string;
    page: string;
  };
}
