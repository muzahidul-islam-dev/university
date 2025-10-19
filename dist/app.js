import express, {} from 'express';
import cors from 'cors';
import { StudentRouter } from './app/modules/student/student.route.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1/students', StudentRouter);
export default app;
//# sourceMappingURL=app.js.map