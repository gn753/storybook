import GeneralLayout from '@layouts/general-layout.js'
import {createBrowserRouter} from 'react-router-dom'
import {Router as RemixRouter} from '@remix-run/router/dist/router'
import HomePage from '@pages/index'

interface RouterBase {
  id: number // 페이지 아이디 (반복문용 고유값)
  path: string // 페이지 경로
  label: string // 사이드바에 표시할 페이지 이름
  element: React.ReactNode // 페이지 엘리먼트
  isLayout: boolean // 공통 레이아웃 컴포넌트 필요 여부.
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth?: boolean // 인증이 필요한 페이지 여부
}

type RouterElement = UserAccessibleRouterElement

const routerData: RouterElement[] = [
  {
    id: 0,
    label: '메인 페이지',
    path: '/',
    element: <HomePage />,
    isLayout: true,
  },

]

export const router: RemixRouter = createBrowserRouter(
  routerData.map(router => {
    /// 공통 레이아웃이 필요하다면 공통 레이아웃 부여
    if (router.isLayout) {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      }
    }
    return {
      path: router.path,
      element: router.element,
    }
  }),
)
