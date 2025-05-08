import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
export const handelerrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      toastr.error(err.error.message, '', {
        progressBar: true,
        timeOut: 2000,
      });

      return throwError(() => {
        return err;
      });
    })
  );
};

// return next(req).pipe(
//   catchError((err) => {
//     if (
//       err.error.message !==
//       'You are not logged in. Please login to get access'
//     ) {
//       toastr.error(err.error.message, 'error Message!', {
//         progressBar: true,
//         timeOut: 2000,
//       });
//     }
//     return throwError(() => {
//       return err;
//     });
//   })
// );
