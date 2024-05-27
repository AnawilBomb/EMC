// index.js
import { createRouter, createWebHistory } from 'vue-router';
import EMC from '@/components/EMC.vue';
import Employee from '@/components/Employee/Employee.vue';
import PushEmployee from '@/components/Employee/PushEmployee.vue';
import DeleteEmployee from '@/components/Employee/DeleteEmployee.vue'; 
import UpdateEmployee from '@/components/Employee/UpdateEmployee.vue';  
import Department from '@/components/Department/Department.vue';
import PushDepartment from '@/components/Department/PushDepartment.vue';
import DeleteDepartment from '@/components/Department/DeleteDepartment.vue';
import UpdateDepartment from '@/components/Department/UpdateDepartment.vue';
import Project from '@/components/Project/Project.vue';
import PushProject from '@/components/Project/PushProject.vue';
import DeleteProject from '@/components/Project/DeleteProject.vue';
import UpdateProject from '@/components/Project/UpdateProject.vue'; 

const routes = [
  {
    path: '/',
    name: 'EMC',
    component: EMC
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employee
  },
  {
    path: '/push-employee',
    name: 'PushEmployee',
    component: PushEmployee 
  },
  {
    path: '/delete-employee',
    name: 'DeleteEmployee',
    component: DeleteEmployee 
  },
  {
    path: '/update-employee',
    name: 'UpdateEmployee',
    component: UpdateEmployee
  },
  {
    path: '/departments',
    name: 'Departments',
    component: Department
  },
  {
    path: '/push-department',
    name: 'PushDepartment',
    component: PushDepartment 
  },
  {
    path: '/delete-department',
    name: 'DeleteDepartment',
    component: DeleteDepartment 
  },
  {
    path: '/update-department',
    name: 'UpdateDepartment',
    component: UpdateDepartment
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Project
  },
  {
    path: '/push-project',
    name: 'PushProject',
    component: PushProject 
  },
  {
    path: '/delete-project',
    name: 'DeleteProject',
    component: DeleteProject 
  },
  {
    path: '/update-project',
    name: 'UpdateProject',
    component: UpdateProject 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
