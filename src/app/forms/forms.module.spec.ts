import { MyFormsModule } from './forms.module';

describe('FormsModule', () => {
  let formsModule: MyFormsModule;

  beforeEach(() => {
    formsModule = new MyFormsModule();
  });

  it('should create an instance', () => {
    expect(formsModule).toBeTruthy();
  });
});
