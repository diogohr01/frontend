import styles from './styles.module.scss'
import { Button } from '../components/button'
import { api } from '@/services/api'
import { getCookiesServer } from '@/lib/cookieServer'
import { redirect } from 'next/navigation'
import { toastSuccess } from '@/app/components/toast'

export default function Category(){
      async function handleRegisterCategory(formData: FormData){
            "use server"
            const newCategory = formData.get('name')

            if(newCategory === ''){
                  return;
                }
                console.log(newCategory)

                const data = {
                  name: newCategory
                }
                const token = getCookiesServer();
                await api.post('/category', data, {
                  headers:{
                        Authorization: `Bearer ${token}`
                  }
                })
                .catch((err) =>{
                  console.log(err)
                  
                  return;
                })
                  
                  redirect('/dashboard')
            }
      return(
            <main className={styles.container}>
            <h1>Nova categoria</h1>

            <form className={styles.form} action={handleRegisterCategory}>
            <input type='text' name='name' placeholder='Nome da categoria, ex: pizzas' required className={styles.input}/>
            <Button name='Cadastrar'/>
            </form>
            </main>
      )
}