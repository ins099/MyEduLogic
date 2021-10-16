import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Homepage from '../screens/Homepage'
import Inbox from '../screens/Inbox'
import Activities from '../screens/Activities'
import AlmostDone from '../screens/AlmostDone'
import CreateSchool from '../screens/CreateSchool'
import Diary from '../screens/Diary'
import Events from '../screens/Events'
import Lessons from '../screens/Lessons'
import Library from '../screens/Library'
import SignUp from '../screens/SignUp'
import Menu from '../screens/Menu'
import Recommendations from '../screens/Recommendations'
import Schedule from '../screens/Schedule'
import StaffParents from '../screens/StaffParents'
import VerifyEmail from '../screens/VerifyEmail'
import CreateAccount from '../screens/CreateAccount'
import Login from '../screens/Login'
import ParentDashboard from '../screens/ParentDashboard'
import ChatScreenBlue from '../screens/ChatScreenBlue'
import Notifications from '../screens/Notifications'
import VerifySms from '../screens/VerifySms'
import Calendars from '../screens/Calendar'
import Childrenlist from '../screens/Childrenlist'
import EditProfile from '../screens/EditProfile'
import Addphoto from '../screens/Addphoto'
import Addvideo from '../screens/Addvideo'
import Roomlist from '../screens/Roomlist'
import Kudos from '../screens/Kudos'
import Code from '../screens/code'
import FinalStep from '../screens/FinalStep'
import Settings from '../screens/Settings'
import NewMessage from '../screens/NewMessage'
import AccountSettings from '../screens/AccountSettings'
import EditPassword from '../screens/EditPassword'
import ReportProblem from '../screens/ReportProblem'
import Help from '../screens/Help'
import Photos from '../screens/Photos'
import Videos from '../screens/Videos'
import RecentPhotos from '../screens/RecentPhotos'
import RecentVideos from '../screens/RecentVideos'
import SetsPhotos from '../screens/SetsPhotos'
import SetsVideo from '../screens/SetsVideo'
import AddEvent from '../screens/AddEvent'
import Timeline from '../screens/Timeline'
import StudentDetails from '../screens/StudentDetails'
import PlayVideo from '../screens/PlayVideo'
import ChatScreen from '../screens/ChatScreen'

const Stack = createNativeStackNavigator()


export default function MyStack () {

    return(
        <Stack.Navigator initialRouteName='Menu'>
            <Stack.Screen name='Menu' component={Menu} options={{headerShown:false}} />
            <Stack.Screen name='Homepage' component={Homepage} options={{headerShown:false}} />
            <Stack.Screen name='Inbox' component={Inbox} options={{headerShown:false}} />
            <Stack.Screen name='Activities' component={Activities} options={{headerShown:false}} />
            <Stack.Screen name='Diary' component={Diary} options={{headerShown:false}} />
            <Stack.Screen name='Events' component={Events} options={{headerShown:false}} />
            <Stack.Screen name='Lessons' component={Lessons} options={{headerShown:false}} />
            <Stack.Screen name='Library' component={Library} options={{headerShown:false}} />
            <Stack.Screen name='Recommendations' component={Recommendations} options={{headerShown:false}} />
            <Stack.Screen name='Schedule' component={Schedule} options={{headerShown:false}} />
            <Stack.Screen name='ParentDashboard' component={ParentDashboard} options={{headerShown:false}} />
            <Stack.Screen name='ChatScreenBlue' component={ChatScreenBlue} options={{headerShown:false}} />
            <Stack.Screen name='Notifications' component={Notifications} options={{headerShown:false}} />
            <Stack.Screen name='Calendar' component={Calendars} options={{headerShown:false}} />
            <Stack.Screen name='Childrenlist' component={Childrenlist} options={{headerShown:false}} />
            <Stack.Screen name='Roomlist' component={Roomlist} options={{headerShown:false}} />
            <Stack.Screen name='Addphoto' component={Addphoto} options={{headerShown:false}} />
            <Stack.Screen name='Addvideo' component={Addvideo} options={{headerShown:false}} />
            <Stack.Screen name='EditProfile' component={EditProfile} options={{headerShown:false}} />
            <Stack.Screen name='Kudos' component={Kudos} options={{headerShown:false}} />
            <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}} />
            <Stack.Screen name='NewMessage' component={NewMessage} options={{headerShown:false}} />
            <Stack.Screen name='AccountSettings' component={AccountSettings} options={{headerShown:false}} />
            <Stack.Screen name='EditPassword' component={EditPassword} options={{headerShown:false}} />
            <Stack.Screen name='ReportProblem' component={ReportProblem} options={{headerShown:false}} />
            <Stack.Screen name='Help' component={Help} options={{headerShown:false}} />
            <Stack.Screen name='Photos' component={Photos} options={{headerShown:false}} />
            <Stack.Screen name='Videos' component={Videos} options={{headerShown:false}} />
            <Stack.Screen name='RecentPhotos' component={RecentPhotos} options={{headerShown:false}} />
            <Stack.Screen name='RecentVideos' component={RecentVideos} options={{headerShown:false}} />
            <Stack.Screen name='SetsPhotos' component={SetsPhotos} options={{headerShown:false}} />
            <Stack.Screen name='SetsVideo' component={SetsVideo} options={{headerShown:false}} />
            <Stack.Screen name='AddEvent' component={AddEvent} options={{headerShown:false}} />
            <Stack.Screen name='Timeline' component={Timeline} options={{headerShown:false}} />
            <Stack.Screen name='StudentDetails' component={StudentDetails} options={{headerShown:false}} />
            <Stack.Screen name='PlayVideo' component={PlayVideo} options={{headerShown:false}} />
            <Stack.Screen name='ChatScreen' component={ChatScreen} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}
