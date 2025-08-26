import { fetchServerData } from '@/utils/api-server';
import ActivityList from '@/components/activities/ActivityList.client';
import { Activities } from '@/types/schema/activitiesSchema';
import SectionTitle from '@/components/ui/Section/SectionTitle';
import { ITEM_DEFAULT_PAGESIZE } from '@/constants';

const fetchActivities = async ({ page, size }: { page: number; size: number }) => {
  const data = await fetchServerData<Activities>({
    path: '/activities',
    query: { method: 'offset', page, size },
  });

  return data;
};

const MainPage = async () => {
  const initialPage = 1;
  const initialSize = ITEM_DEFAULT_PAGESIZE;
  const initialData = await fetchActivities({ page: initialPage, size: initialSize });

  return (
    <main>
      <section className='mx-auto mt-[34px] w-full lg:w-[1200px]'>
        <SectionTitle title='🌏 모든 체험' />
        <ActivityList initialData={initialData} initialPage={initialPage} />
      </section>
    </main>
  );
};

export default MainPage;
