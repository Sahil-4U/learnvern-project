Hi guys this project is for revise my react concepts . lets start :)

what i have lerned till now

i)jSX

2)Props

3)childern props

4)Usestate hook
how to manage multiple input box from a single state:--
const [form, setForm] = useState({ title: '', date: '', amount: '' });

for update title :--
const handleTitle = (event) => {
setForm((prevState) => {
return { ...prevState, title: event.target.value };
})
}
