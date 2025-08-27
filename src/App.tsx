import Text from "./components/text";
import TrashIcon from './assets/icons/trash.svg?react'
import CheckIcon from './assets/icons/check.svg?react'
import PencilIcon from './assets/icons/pencil.svg?react'
import PlusIcon from './assets/icons/plus.svg?react'
import SpinnerIcon from './assets/icons/spinner.svg?react'
import XIcon from './assets/icons/x.svg?react'
import Icon from './components/icon'
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";

export default function App(){
  return(
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá Mundo!
        </Text>
        <Text className="text-green-base">
          Olá Mundo!
        </Text>
        <Text variant="body-md-bold" className="text-pink-base">
          Olá Mundo!
        </Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className='fill-green-base'/>
        <Icon svg={CheckIcon} className='fill-green-base'/>
        <Icon svg={PlusIcon} className='fill-green-base'/>
        <Icon svg={SpinnerIcon} animate className='fill-green-base'/>
        <Icon svg={PencilIcon} className='fill-green-base'/>
        <Icon svg={XIcon} className='fill-green-base'/>
      </div>
      <div>
        <Badge variant='secondary'>5</Badge>
        <Badge variant='primary'>2 de 5</Badge>
      </div>
      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
      <div>
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant='secondary' />
        <ButtonIcon icon={TrashIcon} variant='tertiary' />
      </div>
      <div>
        <InputText />
      </div>
    </div>
  )
}
