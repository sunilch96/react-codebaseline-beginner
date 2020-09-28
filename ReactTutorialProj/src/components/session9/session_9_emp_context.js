import React from 'react';
const session_9_emp_context = React.createContext({
      data: '',
      changeEmployeeInfo: () => {
            //We'll pas this components down through the context,  to allow child components to update context.
      }
});

export default session_9_emp_context;