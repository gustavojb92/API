import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TaskService } from"./shared/task.service";

describe('TasksController', () => {
  let controllerTasks: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TaskService]
    }).compile();

    controllerTasks = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controllerTasks.getTasks()).toBe('Tasks');
  });
});
