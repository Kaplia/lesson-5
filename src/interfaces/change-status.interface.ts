import {TaskStatuses} from '@/static/task-status.constant';
import {TaskInterface} from '@/interfaces/task.interface';

export interface ChangeStatusInterface {
    index: number;
    prevStatus: TaskStatuses;
    newStatus: TaskStatuses;
    task: TaskInterface;
}
