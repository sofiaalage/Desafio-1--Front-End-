import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegisterSchema } from '../../validator/schema';
import { useRegisterContext } from '../../contexts/register/register';
import { FormReg, LabelErrors } from './style';

interface ISimulationForm {
  valor: number;
  parcela: number;
  MDR: number;
}

const SimulationForm = () => {
  const { submitRegister } = useRegisterContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISimulationForm>({
    resolver: yupResolver(formRegisterSchema),
  });

  return (
    
  );
};

export default FormRegister;