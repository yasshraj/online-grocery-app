﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

namespace Accessors
{
    public interface IUserAccessor
    {
        SqlConnection createConnection();
        string validateAccount(string username, string password, SqlConnection conn);

        string retrieveCart(string userId);
        void registerUser(string email, string username, string password);
    }
}
