import {DATABASE_MANAGER} from 'Services/ApiService/Database';
import {useAppMutation} from '../../GenericHooks';
import {ROUTES} from 'Services/ApiService/Routes';

const onSuccess = data => {
  console.log(data);
};

const useLoginWithPhoneNumber = ({showLoading = false}) => {
  return useAppMutation({mutationFn: payload => DATABASE_MANAGER.post({key: ROUTES.login, data: payload}), onSuccess, showLoading});
};

export default useLoginWithPhoneNumber;
