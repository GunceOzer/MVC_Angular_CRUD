using MVC_Angular_CRUD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC_Angular_CRUD.Controllers
{
    public class EmployeeController : Controller
    {
        
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllEmployees()
        {
            using (EmployeeDBEntities db = new EmployeeDBEntities())
            {
                var list = db.Employees.ToList();
                return Json(list, JsonRequestBehavior.AllowGet);
            }

        }

        public string AddEmployee(Employee E)
        {
            using (EmployeeDBEntities db = new EmployeeDBEntities())
            {
                db.Employees.Add(E);
                db.SaveChanges();
                return "Added Succesfully";
            }
        }

        public string UpdateEmployee(Employee E)
        {
            using (EmployeeDBEntities db = new EmployeeDBEntities())
            {
                var oldEmployee = db.Employees.Where(x => x.EmployeeID == E.EmployeeID).FirstOrDefault();
                oldEmployee.FullName = E.FullName;
                oldEmployee.EMPCode = E.EMPCode;
                oldEmployee.Mobile = E.Mobile;
                oldEmployee.Position = E.Position;
                db.SaveChanges();
                return "Updated Succesfully";
            }
        }

        
        public string DeleteEmployee(Employee Emp)
        {
            if (Emp != null)
            {
                using (EmployeeDBEntities db = new EmployeeDBEntities())
                {
                    var Emp_ = db.Entry(Emp);
                    if (Emp_.State == System.Data.Entity.EntityState.Detached)
                    {
                        db.Employees.Attach(Emp);
                        db.Employees.Remove(Emp);
                    }
                    db.SaveChanges();
                    return "Employee Deleted Successfully";
                }
            }
            else
            {
                return "Employee Not Deleted! Try Again";
            }
        }
    }
}