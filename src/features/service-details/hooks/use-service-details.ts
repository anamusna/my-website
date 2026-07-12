import { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mergePageSeo } from "data/page-seo";
import { ExtendedService, services } from "data/services";
import { slugify } from "utils/slugify";

export type ServiceDetailTab = {
  id: string;
  label: string;
};

type UseServiceDetailsResult = {
  service: ExtendedService | null;
  activeTabId: string;
  tabs: ServiceDetailTab[];
  redirectPath: string | null;
  pageSeo: ReturnType<typeof mergePageSeo> | null;
  handleTabChange: (tabId: string) => void;
};

export function useServiceDetails(): UseServiceDetailsResult {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = useMemo(
    () => services.find((entry) => slugify(entry.title) === slug) ?? null,
    [slug],
  );

  const redirectPath = useMemo(() => {
    if (!slug) return "/services";
    if (service) return null;
    if (services.length > 0) return `/services/${slugify(services[0].title)}`;
    return "/services";
  }, [slug, service]);

  const tabs = useMemo(
    () =>
      services.map((entry) => ({
        id: slugify(entry.title),
        label: entry.title,
      })),
    [],
  );

  const pageSeo = useMemo(() => {
    if (!service || !slug) return null;
    return mergePageSeo({
      title: `${service.title} | Services | Ansumana Darboe`,
      description: service.text,
      path: `/services/${slug}`,
    });
  }, [service, slug]);

  const handleTabChange = useCallback(
    (tabId: string) => {
      if (tabId !== slug) {
        navigate(`/services/${tabId}`);
      }
    },
    [navigate, slug],
  );

  return {
    service,
    activeTabId: slug ?? "",
    tabs,
    redirectPath,
    pageSeo,
    handleTabChange,
  };
}
