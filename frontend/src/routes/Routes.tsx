import { Route, Routes } from 'react-router-dom';
import { useAuthentication } from '../hooks/useAuthentication';
import AuthWrapper from '../pages/AuthWrapper';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/Signup';
import Course from '../pages/course/Course';
import IndividualCourse from '../pages/course/IndividualCourse/IndividualCourse';
import CourseContent from '../pages/courseContent/[id]';
import CreateCourse from '../pages/createCourse/CreateCourse';
import Home from '../pages/Home/Home';
import EditCourse from '../pages/manageCourse/[id]';
import MyCourses from '../pages/myCourses/MyCourses';
import Account from '../pages/Profile/Account';
import {
  ACCOUNT,
  COURSE,
  COURSE_CONTENT,
  CREATE_COURSE,
  EDIT_COURSE,
  LOGIN,
  MY_COURSES,
  ROOT,
  SIGNUP,
} from './route.json';

const AppRoutes = () => {
  const { user } = useAuthentication();

  return (
    <Routes>
      <Route path={ROOT.route} element={<AuthWrapper />}>
        <Route path={ACCOUNT.route} element={<Account />} />
        <Route path={COURSE.route}>
          <Route
            path={COURSE.subRoutes.courseId}
            element={<IndividualCourse />}
          />
          <Route path={''} element={<Course />} />
        </Route>
        <Route path={ROOT.route} element={<Home />} />
        <Route path={MY_COURSES.route} element={<MyCourses />} />
        <Route path={CREATE_COURSE.route} element={<CreateCourse />} />
        <Route path={COURSE_CONTENT.route} element={<CourseContent />} />
        <Route path={EDIT_COURSE.route} element={<EditCourse />} />
      </Route>
      <Route
        path={LOGIN.route}
        // element={user ? <Navigate to={ROOT.route} replace /> : <Login />}
        element={<Login />}
      />
      <Route
        path={SIGNUP.route}
        // element={user ? <Navigate to={ROOT.route} replace /> : <Login />}
        element={<SignUp />}
      />
    </Routes>
  );
};

export default AppRoutes;
