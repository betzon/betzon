import PrimaryButton from "../../components/buttons/primary"
import { SecondaryButton, SecondaryIconButton } from "../../components/buttons/secondary"
import NeutralButton from "../../components/buttons/neutral"
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ButtonIcon from "../../components/buttons/icons";
import ButtonIconNumber from "../../components/buttons/iconnumbers";
import WagerTags from "../../components/tags/wagertags";
import Profile from "../../components/profile/profile";
import ProfilePill from "../../components/profile/profilepill";
import Input from "../../components/(forms)/main";
import DrawerComponent from "@/app/components/(modals)";
import GoBackTitleHeader from "@/app/components/headers/gobacktitle";
import TitleHeader from "@/app/components/headers/title";
import DashboardHeader from "@/app/components/headers/main";
import CreateWagerHeader from "@/app/components/headers/create-wager";
import MessagingInput from "@/app/components/(forms)/messaging-input";
import ChannelHeader from "@/app/components/headers/channel";
import MobileBottomNavigation from "@/app/components/navigation/bottom-navigation";

const Main = () => {
  return (
    <div>
      <h1>Template</h1>

      <PrimaryButton>Primary</PrimaryButton>

      <SecondaryButton>Secondary</SecondaryButton>

      <SecondaryIconButton
        icon={<ViewKanbanIcon />}
        disabled={true}
      >
        Secondary Icon
      </SecondaryIconButton>

      <SecondaryIconButton
        icon={<ViewKanbanIcon />}
        disabled={false}
      >
        Secondary Icon
      </SecondaryIconButton>

      <ButtonIcon>
        <ViewKanbanIcon />
      </ButtonIcon>

      <NeutralButton>
        Neutral
      </NeutralButton>

      <WagerTags title={'Tags'} />

      <Profile size={36} />

      <Profile size={48} />

      <Profile size={60} />

      <ProfilePill max={4} size={20} />

      <Input label='email' />

      <DrawerComponent />

      <GoBackTitleHeader title={'Notifications'} />

      <TitleHeader title={'Chip Bank'} />

      <DashboardHeader title={'BetzOn'} />

      <CreateWagerHeader />

      <ChannelHeader />

      <MessagingInput />

      <MobileBottomNavigation />

    </div>
  )
}
export default Main
