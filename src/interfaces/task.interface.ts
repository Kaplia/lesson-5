import {TaskStatuses} from '@/static/task-status.constant';

export interface TaskInterface {
    id: number;
    name: string;
    description: string;
    deadline: string;
    status: TaskStatuses;
}
