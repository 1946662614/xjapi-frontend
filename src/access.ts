// import {currentUser} from "@/services/ant-design-pro/api";

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { initialState:InitialState } | undefined) {
  const { loginUser } = initialState ?? {};
  return {
    canUser:loginUser ,
    canAdmin: loginUser.userRole === 'admin',
  };
}
