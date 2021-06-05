import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodoState} from '../../store/todo/todo-reducer';
import {TodoCreateAction, TodoDeleteAction, TodoToggleAction} from '../../store/todo/todo-actions';
import {Observable} from 'rxjs';
import {Todo} from '../../model/todo';
import {todoListSelector} from '../../store/todo/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

  todoList = [];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new TodoCreateAction({ name }));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleAction({ id }));
  }
}
